class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :boards,
  class_name: :Board

  has_many :pins,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :Pin

  has_many :in_follows, class_name: :Follow, foreign_key: :student_id
   has_many :out_follows, class_name: :Follow, foreign_key: :teacher_id
   has_many :students, through: :in_follows, source: :student
   has_many :teachers, through: :out_follows, source: :teacher


  attr_reader :password
  after_initialize :ensure_session_token

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end
end
