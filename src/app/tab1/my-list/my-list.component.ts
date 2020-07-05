import { Component, OnInit } from "@angular/core";
import { TEST_TODO_ITEMS } from "./test-todo-items.const";
import { TodoItem } from "./todo-item.interface";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-my-list",
  templateUrl: "./my-list.component.html",
  styleUrls: ["./my-list.component.scss"],
})
export class MyListComponent implements OnInit {
  items: TodoItem[] = TEST_TODO_ITEMS;
  selectedItems: TodoItem[] = [];
  showSearch = false;
  searchTerms = new FormControl("");

  ngOnInit(): void {
    this.selectedItems = this.items;
    this.searchTerms.valueChanges.subscribe((val) => this.search(val));
  }

  showTodo(): void {
    this.selectedItems = [];
  }

  showDone(): void {
    this.selectedItems = [];
  }

  showAll(): void {
    this.selectedItems = this.items.slice();
  }

  search(searchTerms: string): void {
    this.selectedItems = [];
  }
}
