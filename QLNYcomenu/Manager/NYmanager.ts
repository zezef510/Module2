import {NY} from "../entity/NY";

export class NYmanage{
    listNY : NY[] = []
    showListNY(){
        if (this.listNY.length === 0 ){
            console.log(`Ko co du lieu`);
            return;
        }
        else {
            for (let i = 0; i < this.listNY.length; i++) {
                const ny =  this.listNY[i]
                console.log(`Mã người yêu: ${ny.id}`);
                console.log(`Tên người yêu: ${ny.name}`);
                console.log(`Cung hoàng đạo: ${ny.zodiac}`);
                console.log(`Quê quán: ${ny.hometown}`);
                console.log(`Năm sinh: ${ny.birthYear}`);
                console.log(`Sở thích: ${ny.hobby}`);
                console.log("===============================");
            }
        }
    }
    findNYByName(isName : string){
        const filterNY = this.listNY.filter(
            // @ts-ignore
            (ny) => ny.name.toLowerCase().includes(isName.toLowerCase())
        );
        if ( filterNY.length === 0 ){
            console.log(`Ko co du lieu`)
            return
        }
        for (let i = 0; i < filterNY.length; i++) {
            let nY = this.listNY[i]
            console.log(`Nguoi yeu ban muon tim la:`)
            console.log(`Mã người yêu: ${nY.id}`);
            console.log(`Tên người yêu: ${nY.name}`);
            console.log(`Cung hoàng đạo: ${nY.zodiac}`);
            console.log(`Quê quán: ${nY.hometown}`);
            console.log(`Năm sinh: ${nY.birthYear}`);
            console.log("===============================");
        }
    }
    addNy(maNY: number, ten: string, zodiac: string, hometown: string, birthYear: number, hobby: string[]){
        let coincident = false
        for (let i = 0; i < this.listNY.length; i++) {
            if (this.listNY[i].id === maNY){
                coincident = true
                return
            }
        }
        if(coincident){
            console.log(`Da ton tai NY`)
            return;
        }
        const  newNY = new NY(maNY, ten, zodiac, hometown, birthYear,hobby)
        this.listNY.push(newNY)
        console.log(`Them thanh cong`)
    }
    editNY(maNY: number, ten?: string, zodiac?: string, hometown?: string, birthYear?: number, hobby?: string[]){
        const filteredNY = this.listNY.filter((ny) => ny.id === maNY);
        if (filteredNY.length > 0) {
            if (ten) filteredNY[0].name = ten;
            if (zodiac) filteredNY[0].zodiac = zodiac;
            if (hometown) filteredNY[0].hometown = hometown;
            if (birthYear) filteredNY[0].birthYear = birthYear;
            if (hobby) filteredNY[0].hobby = hobby;
            console.log("Da cap nhat thong tin ");
        } else {
            console.log("Khong ton tai nguoi yeu can cap nhat");
        }
    }
    deleteNY( id : number){
        const  newList = this.listNY.filter((delte)=>delte.id !==  id)
        if ( newList.length === this.listNY.length ){
            console.log(`Ko ton tai `)
        }
        else {
            this.listNY = newList
            console.log(`Xoa thanh cong `)
        }
    }

}