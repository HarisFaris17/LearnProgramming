import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class lambda {
    
    public static void main(String main[]){
        List<Employee> employees = Arrays.asList(new Employee("Nuke", 20),new Employee("Haris",19));
        employees.sort((e1,e2)->e1.getAge() - e2.getAge());
        employees.forEach(System.out::println);
        
    }
    
}



class Employee{
    String name;
    int age;

    
    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    
    public String toString() {
        // TODO Auto-generated method stub
        return name+age;
    }
    
}
