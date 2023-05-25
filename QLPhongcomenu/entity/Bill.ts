     export class Bill {
        invoiceNo: number;
        customerId: number;
        roomId: number;
        checkInDate: Date;
        checkOutDate: Date;
        totalAmount: number;

        constructor(invoiceNo: number, customerId: number, roomId: number, checkInDate: Date, checkOutDate: Date, totalAmount: number) {
            this.invoiceNo = invoiceNo;
            this.customerId = customerId;
            this.roomId = roomId;
            this.checkInDate = checkInDate;
            this.checkOutDate = checkOutDate;
            this.totalAmount = totalAmount;
        }

        // Method to display invoice details
        displayInvoiceDetails(): void {
            console.log(`Invoice No: ${this.invoiceNo}, Customer ID: ${this.customerId}, Room ID: ${this.roomId}, Check-in Date: ${this.checkInDate}, Check-out Date: ${this.checkOutDate}, Total Amount: ${this.totalAmount}`);
        }
    }