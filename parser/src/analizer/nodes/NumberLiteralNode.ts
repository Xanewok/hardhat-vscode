import { NumberLiteral } from "@solidity-parser/parser/dist/ast-types";

import { Location, FinderType, Node } from "./Node";

export class NumberLiteralNode implements Node {
    type: string;
    uri: string;
    astNode: NumberLiteral;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    constructor (numberLiteral: NumberLiteral, uri: string) {
        this.type = numberLiteral.type;
        this.uri = uri;
        this.astNode = numberLiteral;
        // TO-DO: Implement name location for rename
    }

    addChild(child: Node): void {
        this.children.push(child);
    }

    setParent(parent: Node): void {
        this.parent = parent;
    }

    accept(find: FinderType, orphanNodes: Node[], parent?: Node): void {
        // TO-DO: Method not implemented
    }
}
