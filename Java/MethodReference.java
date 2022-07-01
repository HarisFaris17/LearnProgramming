import java.util.function.BiFunction;

public class MethodReference {
    public static void main(String args[]){
        Haris haris = Methodku::keluaran; /* karena interface Haris adalah sebuah functional interface maka method yang direference
                                            langsung di map ke satu satunya abstract methodnya Haris*/
        Haris haris2 = new Methodku()::keluaranNonStatic;
        haris.percobaan();
        Thread thread = new Thread(Methodku::keluaran); /*karena constructor Thread membutuhkan Interface Runnable. dan Runnable 
                                                            adalah functional interface, sehingga method keluaran akan 
                                                            langsung di map ke satu-satunya abstract method dari Runnable*/
        thread.start();
        BiFunction<Integer,Integer,Integer> biFunction = Adder::penambah; /*seperti yang kita tau bahwa argument BiFunction
                                                                            ada 3 yaitu penambah 1,penambah 2, dan hasil jumlah
                                                                            sehingga karena memang parameter dan
                                                                            return valuenya cocok dengan pada method penambah 
                                                                            pada class adder*/
                                                                            
        System.out.println(biFunction.apply(1, 2)); 
        Thread thread2 = new Thread(new Methodku()::keluaranNonStatic); /*function reference dengan objek*/
        thread2.start();
        haris2.percobaan();
    }
}

class Methodku{
    public static void keluaran(){
        System.out.println("Ini keluaran di methodku");
    }
    public void keluaranNonStatic(){
        System.out.println("Ini keluaran di methodku di keluaran non static");

    }
}

interface Haris{
    void percobaan();
}

class Adder{
    public static Integer penambah(Integer a, Integer b){
        return a+b;
    }
}
