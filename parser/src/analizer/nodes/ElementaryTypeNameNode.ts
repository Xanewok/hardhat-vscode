import { AST, ElementaryTypeName } from "@solidity-parser/parser/dist/ast-types";

import { Location, Node } from './Node';

class ElementaryTypeNameNode implements Node {
    type: string;

    uri: string;
    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    astNode: AST;

    constructor (uri: string, elementaryTypeName: ElementaryTypeName) {
        this.type = elementaryTypeName.type;

        this.uri = uri;
        // TO-DO: Implement name location for rename

        this.astNode = elementaryTypeName;
    }

    addChild(child: Node): void {
        this.children.push(child);
    }

    setParent(parent: Node): void {
        this.parent = parent;
    }

    accept(orphanNodes: Node[], parent?: Node): void {
        // TO-DO: Method not implemented
    }
}