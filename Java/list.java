import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* *
    list itu adalah interface oleh karena itu tidak ada constructor tetapi ia bisa mereference ke Array.asList atau ArrayList() seperti 
    dibawah karena ArrayList adalah implementasi List. dan yang perlu diingat bahwa instance dari sebuah interface itu boleh menggunakan reference dari class yang mengimplementasi
    kan interface tersebut
* */
public class list {
    public static void main(String args[]){
        List<String> haris = new ArrayList<>(); /*Karena ArrayList() adalah implementasi dari List maka boleh. dan juga disini
                                                dipakai diamond operator (<>), karena java cukup pintar mengetahui apa tipe
                                                dari generic. karena memang sebelumnya ada generic String di List*/
        haris.add("ss");
        haris.forEach(System.out::println); /*Karena LIst itu mengextends Collections dan Collections mengextends Iterable
                                            dan pada Iterable itu ada abstract method forEach yang parameternya adalah 
                                            Consumer<? super T> action. dan abstract method ini diimplementasikan di ArrayList.
                                            Bisa terlihat bahwa wildcard type (?) dan super T dipakai, sehingga karena T
                                            yang dipakai adalah String, maka tidak menjadi masalah, karena. karena Consumer adalah
                                            functional Interface, maka jika dimasukkan method static seperti println, maka
                                            akan langsung dimasukkan ke accept pada Consumer.*/
                                            
    }
    
}
