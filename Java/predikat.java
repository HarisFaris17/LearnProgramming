import java.util.List;
import java.util.function.Predicate;

//entah bagaimana pun bentuk test predikat pokoknya asalkan hasilnya boolean, its ok

public class predikat {
    public static void main(String args[]){
        Predicate<Integer> predicate = i -> i<10; /*lambda expression bisa diekspresikan disini, 
                                                    karena predicate adalah functional interface
                                                    meskipun banyak default method dari predicate*/
        System.out.println(predicate.test(11));
        Predicate<Integer> predicate2 = i -> i>0;
        System.out.println(predicate2.and(predicate).test(-1));
        Predicate<String> predicate3 = word -> word.equals("predicate3");
        Predicate<String> predicate4 = new Predicate<String>() {
            String string = "predikatku";
            @Override
            public boolean test(String t) {return t==string;}
            
        };
        String predikatku = "predikatku";
        String predikatString3 = "predicate3";
        System.out.println(predicate3.test(predikatku));
        System.out.println(predicate3.test(predikatString3));
        System.out.println(predicate4.test(predikatString3)); //Class Predicate akan menggunakan method equals dari containernya.
        Predicate<String> predicate5 = s -> s.contains("S");
        System.out.println("predicate contains " + predicate5.test("hariS"));
        
    }
}