Merhaba projeme hoşgeldin. Neden böyle bir proje oluşturduğumu , projemi oluştururken izlediğim adımları ve projemi nasıl geliştireceğimi seninle paylaşacağım. 
Öncelikle react seçmemin nedeni, projeye web üzerinden her yerden kolaylıkla erişim sağlamak. Günümüzde masaüstü uygulamalardan çok web uygulamaları kullanılmakta ve bende insanlara herhangi bir yazılım indirmeden kolayca erişebilecekleri bir kütüphane hazırlamak istedim.
Gelelim bir react projesinin nasıl oluşturulduğuna. 
* Basit yoldan gidersek öncelikle masaüstümüze bir klasör oluşturalım.*
* Bu klasörü VS Code da açalım ve yeni terminal oluşturalım.*
* Terminal yolumuz "bash" olmasına dikkat edelim.*
* Terminale **create-react-app** yazarak react klasörlerimizin otomatik olarak oluşmasını bekleyelim.*
* Klasör mimarimiz şu şekilde olacaktır : "node_modules" "public" "src" ".gitignore" "package-lock.json" "package.json" ve son olarak "readme.md"*
* src klasörümüzün altına "components" isimli bir klasör oluşturuyoruz ve kodlarımızı yazacağımız dosyalarımızı bu klasörün içine yazıyoruz.* **components, bileşenler anlamına gelir ve yeniden kullanılabilir ve bağımsız öğeler içerir.**
* Kodlarımızı yazdığımız dosya uzantılarının js olmasına dikkat edelim.*
* Dosyalarımızı birbirine bağlarken "import" yöntemini kullanıyoruz. importlar genellikle dosyanın en üstüne yazılır. ** Örneğin "import React from 'react'; " ifadesi, React kütüphanesinden React adında bir nesneyi projenize dahil etmek anlamına gelir.**
* Projeyi browser da açmak için terminale "npm run start" yazmamız gerekiyor. Bu işlemden sonra bir browser sayfası açılır ve projedeki değişikliklerimizi adım adım buradan görebiliriz. Browser ı terminalden çıkarmak için ctrl+c yapmamız yeterlidir.*  
* İçeriğe gelirsek , projemde bir kitap serisi bulunuyor. Şuanlık sadece isimleri mevcut. İlerleyen zamanda kitapların özetlerini de ekleyeceğim. Hatta ekleyeceğiz. **React tercih etmemin bir diğer nedeni de açık kaynaklı olması.** Dilerseniz istediğiniz kitapların özetini sizler de ekleyebileceksiniz * 
* Kitapların görselleriyle desteklediğim bu projeyi sanal bir kütüphaneye dönüştürmeyi hedefliyorum *
