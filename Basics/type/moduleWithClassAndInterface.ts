import { Invoice } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice("vinamilk", "drink", 5)
const documentTwo: hasPrint = new Invoice("VN", "fly", 25)

const allDocument: hasPrint[] = []
allDocument.push(documentOne)