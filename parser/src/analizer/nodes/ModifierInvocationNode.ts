import { ModifierInvocation } from "@solidity-parser/parser/dist/ast-types";

import { Location, FinderType, Node } from "./Node";

export class ModifierInvocationNode implements Node {
    type: string;
    uri: string;
    astNode: ModifierInvocation;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    constructor (modifierInvocation: ModifierInvocation, uri: string) {
        this.type = modifierInvocation.type;
        this.uri = uri;
        this.astNode = modifierInvocation;
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
