import { NameValueExpression } from "@solidity-parser/parser/dist/ast-types";

import { Location, FinderType, Node } from "./Node";

export class NameValueExpressionNode implements Node {
    type: string;
    uri: string;
    astNode: NameValueExpression;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    constructor (nameValueExpression: NameValueExpression, uri: string) {
        this.type = nameValueExpression.type;
        this.uri = uri;
        this.astNode = nameValueExpression;
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
