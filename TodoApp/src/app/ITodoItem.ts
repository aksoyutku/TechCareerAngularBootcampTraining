/* interface'in bir constructor'u olmaz. Bir nesne üretmiyoruz. Sadece 
   oluşuturulacak olan objelerin bir şemasınıoluşuturmuş oluyoruz.
   Burada herhangi bir erişim belirteci tanımlamıyoruz sadece şemasını 
   şablonunu tanımlıyoruz.
 */
export interface ITodoItem {
    id: number
    description: string;
    action: string;
}
