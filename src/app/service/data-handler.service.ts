import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {Task} from "../model/Task";
import {TestData} from "../data/TestData";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {TaskDAOImpl} from "../data/dao/impl/TaskDAOImpl";
import {CategoryDAOImpl} from "../data/dao/impl/CategoryDAOImpl";
import {Priority} from "../model/Priority";
import {PriorityDAOImpl} from "../data/dao/impl/PriorityDAOImpl";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categorySubject = new BehaviorSubject<Category[]>(TestData.categories);
  private taskDao = new TaskDAOImpl();
  private categoryDao = new CategoryDAOImpl();
  private priorityDao = new PriorityDAOImpl();

  constructor() {
    this.fillTasks();
  }

  fillTasks() {
    this.taskSubject.next(TestData.tasks);
  }

  fillTasksByCategories(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.taskSubject.next(tasks);
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDao.findAll();
  }

  getAllCategories(): Observable<Category[]>{
    return this.categoryDao.findAll();
  }

  getAllPriorities(): Observable<Priority[]>{
    return this.priorityDao.findAll();
  }

  updateTask(task: Task): Observable<Task> {
    return this.taskDao.update(task);
  }

  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.taskDao.search(category, searchText, status, priority);
  }

  deleteTask(id: number): Observable<Task> {
    return this.taskDao.delete(id);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.categoryDao.update(category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.categoryDao.delete(id);
  }

  addTask(task: Task) {
    return this.taskDao.create(task);
  }

  addCategory(title: string) {
    return this.categoryDao.create(new Category(null, title));
  }

  searchCategories(title: string) {
    return this.categoryDao.search(title);
  }
}
