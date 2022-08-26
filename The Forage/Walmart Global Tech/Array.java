public class Array {
    double[] hehe;

    public Array(double[] hehe) {
        this.hehe = hehe;
    }

    public double[] getHehe() {
        return this.hehe;
    }

    public void setHehe(double[] hehe) {
        this.hehe = hehe;
    }
    
    public static void main(String[] args) {
        double[] heheeee={11.5,11.2,7};
        double[] coba= new double[10];
        int size=1;
        Array array = new Array(heheeee);
        // System.out.println(array.getHehe()[2]=array.getHehe()[1]);
        System.out.println(heheeee.length);
        // System.out.println(heheeee[size++]);
        // System.out.println((size));
        // System.out.println(heheeee[size]);
        heheeee[size++]=10.02;
        System.out.println(heheeee[1]);
        System.out.println(coba.length);
        System.out.println((float)(0-1)/4);
        System.out.println(8/4-1);
        double logSize = Math.log10(84*3+1);
        double logNumberOfChild = Math.log10(4);
        System.out.println((int)Math.floor(logSize/logNumberOfChild));
    }
}
