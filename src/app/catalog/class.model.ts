import { ICourse } from "./course.model"

export interface IClass {
  classId: string
  course: ICourse
  professor: string
  days: string
  time: string
  seatsAvailable: number
  processing: boolean
  enrolled: boolean
}
