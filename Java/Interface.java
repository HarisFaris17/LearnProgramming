
public class Interface implements InterfaceHaris{
    String name = "haris";
    public void hello(String nama){
        System.out.println("Hello " + nama);
    }
    void namaSaya(){
        System.out.println("nama saya "+name);
    }

    public static void main(String args[]){
        InterfaceHaris saya = new Interface(); /* diperbolehkan karena Interface adalah class yang mengimplementasikan InterfaceHaris
                                                    tetapi hanya bisa mengakses method yang dideklarasikan di InterfaceHaris saja*/
        InterfaceHaris sayaLainnya = haha -> System.out.println(haha); /*Boleh karena InterfaceHaris adalah functional Interface
                                                                        sehingga lambda expression akan langsung di map ke hello*/
        InterfaceHaris sayaLainnyaLLagi = new InterfaceHaris() {
            @Override
            public void hello(String nama){
                System.out.println("Hello" + nama +"Saya menggunakan anonymous class");
            }
        };
        saya.hello("haris");
        sayaLainnya.hello("haha");
        sayaLainnyaLLagi.hello("sayang");
        //@code saya.namaSaya(); 
                                    /*tidka bisa karena saya adalah InterfaceHaris yang tidak memiliki definisi dan deklarasi dari
                                    namaSaya(), meskipun saya di deklarasikan dengan reference Class Interface*/
    }
}

interface InterfaceHaris {
    public void hello(String name);
}

