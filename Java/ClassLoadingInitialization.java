// every class is loaded  by Class Loader java.
// there are two ways to load the Java class, the first one is by referencing (maybe some import included) from another class, and the second is loading the class only whenever the class needs to be initialized. choosing the methods of loading Java classes may vary between JVM

// initialization of class takes place when
/*  1. first object wanted to be created, like using new or using Class.forName, of that class
 *  2. static field  of that class for the first timewanted to be assigned
 *  3. static method of that class for the first time wanted to be used 
 *
 */

public class ClassLoadingInitialization {
    public static void main(String[] args) {
        System.out.println("test");
        //looks like current JVM use lazy load, since the class Class will be loaded when the first class Class called like below (Class wanted to be initialized since in this case the class Class called for the creating object of Class for the first time). Other conditions how the class will be loaded maybe applies as well
        // static block will be called
        Class object = new Class();
        // static block will not be called since the class Class already initialized
        Class object2 = new Class();

        
    }
}

class Class{
    // the static block will be called once per class loading.
    static{
        System.out.println("this will be executed only once per class loading");
    }
    // non-static block will be called whenever a new object of the class is defined
    {
        System.out.println("new object of "+this.getClass().toString()+" has been created");
    }

}
