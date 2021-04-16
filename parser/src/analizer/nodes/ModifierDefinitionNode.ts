import { ModifierDefinition } from "@solidity-parser/parser/dist/ast-types";

import { Location, FinderType, Node } from "./Node";

export class ModifierDefinitionNode implements Node {
    type: string;
    uri: string;
    astNode: ModifierDefinition;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    constructor (modifierDefinition: ModifierDefinition, uri: string) {
        this.type = modifierDefinition.type;
        this.uri = uri;
        this.astNode = modifierDefinition;
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
