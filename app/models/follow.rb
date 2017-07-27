class Follow < ApplicationRecord
  validates :student, :teacher, presence: true
  validates :student, uniqueness: { scope: :teacher}

  belongs_to :teacher,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: :User

  belongs_to :student,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :User

end
