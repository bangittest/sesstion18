class Rat {
    constructor(tenRat, khoiLuongRat, tocDoRat) {
        this.tenRat = tenRat
        this.khoiLuongRat = khoiLuongRat
        this.tocDoRat = tocDoRat
        this.trangThai = true
        this.hanhDongkeuRat = () => {
            console.log(`chit chit`);
        }
    }
}
class Cat {
    constructor(tenCat, khoiLuongCat, tocDoCat) {
        this.tenCat = tenCat
        this.khoiLuongCat = khoiLuongCat
        this.tocDoCat = tocDoCat
        this.hanhDongkeuCat = () => {
            console.log(`meo meo`);
        }
        this.batChuot = (value) => {
            if (this.tocDoCat > value.tocDoRat) {
                console.log(`meo bat duoc chuot`);
            } else {
                console.log(`khong bat dcc`);
            }
        }
        this.khaNangAnThit = (value) => {
            if (value.trangThai) {
                console.log(`da an chuot`);
                this.khoiLuongCat += value.khoiLuongRat
            }
        }
    }
}
let chuot = new Rat("chuot", 3, 20)
let meo = new Cat("meo", 5, 30)
meo.batChuot(chuot)
meo.hanhDongkeuCat()
meo.khaNangAnThit()



