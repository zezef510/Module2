import {Bill} from "../entity/Bill";

 export class InvoiceManagement {
    listInvoice : Bill[] = []
    // Phương thức để tạo hóa đơn mới và trả về hóa đơn đó
    createInvoice(customerId: number, roomId: number, checkInDate: Date, checkOutDate: Date, totalAmount: number): Bill {
        const invoiceNo = this.listInvoice.length + 1;
        const invoice = new Bill(invoiceNo, customerId, roomId, checkInDate, checkOutDate, totalAmount);
        this.listInvoice.push(invoice);
        return invoice;
    }

    // Phương thức để lấy danh sách các hóa đơn
    getInvoices(): Bill[] {
        return this.listInvoice;
    }

    // Phương thức để tìm hóa đơn theo số hóa đơn
    findInvoiceByNumber(invoiceNo: number): Bill | undefined {
        // @ts-ignore
        return this.listInvoice.find((invoice) => invoice.invoiceNo === invoiceNo);
    }
}