import { StructDefinition } from "@solidity-parser/parser/dist/src/ast-types";

import { Location, FinderType, Node } from "./Node";

export class StructDefinitionNode implements Node {
    type: string;
    uri: string;
    astNode: StructDefinition;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    typeNodes: Node[] = [];

    constructor (structDefinition: StructDefinition, uri: string) {
        this.type = structDefinition.type;
        this.uri = uri;
        this.astNode = structDefinition;

        if (structDefinition.loc) {
            this.nameLoc = {
                start: {
                    line: structDefinition.loc.start.line,
                    column: structDefinition.loc.start.column + "struct ".length
                },
                end: {
                    line: structDefinition.loc.start.line,
                    column: structDefinition.loc.start.column + "struct ".length + structDefinition.name.length
                }
            };
        }

        this.typeNodes.push(this);
    }

    getTypeNodes(): Node[] {
        return this.typeNodes;
    }

    getName(): string | undefined {
        return this.astNode.name;
    }

    addChild(child: Node): void {
        this.children.push(child);
    }

    setParent(parent: Node): void {
        this.parent = parent;
    }

    accept(find: FinderType, orphanNodes: Node[], parent?: Node): Node {
        if (parent) {
            this.setParent(parent);
        }

        for (const member of this.astNode.members) {
            find(member, this.uri).accept(find, orphanNodes, this);
        }

        parent?.addChild(this);

        return this;
    }
}