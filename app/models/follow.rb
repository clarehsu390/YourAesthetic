class Follow < ApplicationRecord


  belongs_to :teacher,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: :User

  belongs_to :student,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :User

end
