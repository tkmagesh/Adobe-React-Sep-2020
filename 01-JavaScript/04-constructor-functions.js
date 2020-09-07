function Employee(id, name, salary) {
    if (this.constructor !== Employee)
        return new Employee(id, name, salary);
    //this -=> new object
    this.id = id;
    this.name = name;
    this.salary = salary;
    // this -=> returned by default
}