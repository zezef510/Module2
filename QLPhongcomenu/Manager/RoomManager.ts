import {Room} from "../entity/Room";

export class RoomManager {
    listRooms  : Room[] = [];
    add(add : Room){
        this.listRooms.push(add)
    }
    editRoomToRoomID(id : string){

    }
    show(){
        console.table(this.listRooms)
    }
    findRoomById(roomId: number): Room | undefined {
        // @ts-ignore
        return this.listRooms.find((room) => room.roomId === roomId);
    }


    finRoomToPrice(){

    }
}