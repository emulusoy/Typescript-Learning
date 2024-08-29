// function yazdir(array:string[]){
//     console.log(array);
// }
// yazdir(["enes"]);



    //Generic yapılar

    function yazdir(array:T[]):void {//t tipinde değer gelecek void=sen geriye bir şey döndermeyeceksin
        console.log(array)
    }//hata verir çünkü T tipinde bir şey bilmez!

    //Generic kullanımı
            // tam aşağıdaki generic tanıtımdır
    function yazdir2<T>(array:T[]):void {
        console.log(array)}


    interface GenericType<T>{
        name:string,
        age:number,
        salary: T[]//ben ne gelecek bilmiyorum ya string ya da number bunu dışarıdan gelen bilgi karar verecek
                   //
    }
    const obj1 :GenericType<string>={
        name:"enes",
        age:25,
        salary:["on bin"]
    }
    const obj2 :GenericType<number>={
        name:"mustafa",
        age:22,
        salary:[10000] //burada da number generic type type sen belirle ister'!
    }//O ANKİ DURUMA GÖRE DEĞİŞEBİLEN TİPE GENERİC TİP DENİr


    let array :GenericType<string | number>[]=[obj1,obj2]
    //içine str de nmb de gelebilir dedik ve array oluşturduk

    function write<T>(array:GenericType<T>[]):void{
        array.forEach((value:GenericType<T>)=>console.log(value))
    }
    //funcsiyon içine t tipinde bir şey gelecek ne gelecek bimiyoruz write yanındaki 
    //işaret sen generic fonksiyonsun demektir.arrayiforeachle dön value:tipim genericten 
    //gelecek olandır str ise str number se number sonra bunu konsola yazdır



    //MİRAS ALMA EXTENDS!!

    interface Musteri{
        // id:string,
        // oluşturmaTarihi:string,
        // OluşturanKişi:string,
        musteriNo:string
    }
    interface Kurum{
        // id:string,
        // oluşturmaTarihi:string,
        // OluşturanKişi:string,
        kurumNo:string
    }

    const kurum:Kurum={
        id:"1",
        oluşturmaTarihi:"09.09.2007",
        OluşturanKişi:"emu",
        kurumNo:"23123"
    }

    //burada aynı değerler mevcut bu aynı olanları ortak alanlarda kullanmak daha iyidir

    interface OrtakAlanlar{
        id:string,
        oluşturmaTarihi:string,
        OluşturanKişi:string,
    }
    interface Musteri extends OrtakAlanlar{//extend et yukarıdakinin değerini miras al!
        musteriNo:string,
    }
    interface Kurum extends OrtakAlanlar{//extend et yukarıdakinin değerini miras al!
        kurumNo:string,
    }


    // PARTİAL

    interface User{
        name:string,
        age?:number,//soru işareti kullanmak zorunda deiilim demek
        lastname:string,
        tckn:string
    }
    //partial opsiyonel yapar!
    //fakat hepsine soru işareti atmaktansa bunu Partialla çözebiliyoruz! hata ortadan kalkar
    const user1:Partial<User>={
        name:"enes",
    }

    //Required her şeyi doldurmak zorunda bırakır! tam tersidir

    //Readonly sadece okuyabilirsin değeri değiştiremezsin!

    //pick toplamak demek! :Pick<User ,"name"> user içindeki sadece name yi al! demek bütün değeleri ona ata gibi
