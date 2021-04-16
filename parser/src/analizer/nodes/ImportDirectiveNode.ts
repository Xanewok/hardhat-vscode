import { ImportDirective } from "@solidity-parser/parser/dist/ast-types";

import { Location, FinderType, Node } from "./Node";

export class ImportDirectiveNode implements Node {
    type: string;
    uri: string;
    astNode: ImportDirective;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    constructor (importDirective: ImportDirective, uri: string) {
        this.type = importDirective.type;
        this.uri = uri;
        this.astNode = importDirective;
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
