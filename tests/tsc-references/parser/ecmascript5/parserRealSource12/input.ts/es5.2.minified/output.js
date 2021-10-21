var TypeScript;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
!function(TypeScript) {
    var globalAstWalkerFactory, ChildrenWalkers, getAstWalkerFactory = function() {
        return globalAstWalkerFactory || (globalAstWalkerFactory = new AstWalkerFactory()), globalAstWalkerFactory;
    }, AstWalkOptions = function() {
        "use strict";
        function AstWalkOptions() {
            _classCallCheck(this, AstWalkOptions), this.goChildren = !0, this.goNextSibling = !0, this.reverseSiblings = !1;
        }
        return _createClass(AstWalkOptions, [
            {
                key: "stopWalk",
                value: function(param) {
                    var stop = void 0 === param || param;
                    this.goChildren = !stop, this.goNextSibling = !stop;
                }
            }
        ]), AstWalkOptions;
    }();
    TypeScript.AstWalkOptions = AstWalkOptions;
    var AstWalker = function() {
        "use strict";
        function AstWalker(childrenWalkers, pre, post, options, state) {
            _classCallCheck(this, AstWalker), this.childrenWalkers = childrenWalkers, this.pre = pre, this.post = post, this.options = options, this.state = state;
        }
        return _createClass(AstWalker, [
            {
                key: "walk",
                value: function(ast, parent) {
                    var preAst = this.pre(ast, parent, this);
                    if (void 0 === preAst && (preAst = ast), this.options.goChildren) {
                        var svGoSib = this.options.goNextSibling;
                        this.options.goNextSibling = !0, this.childrenWalkers[ast.nodeType](ast, parent, this), this.options.goNextSibling = svGoSib;
                    } else this.options.goChildren = !0;
                    if (!this.post) return preAst;
                    var postAst = this.post(preAst, parent, this);
                    return void 0 === postAst && (postAst = preAst), postAst;
                }
            }
        ]), AstWalker;
    }(), AstWalkerFactory = function() {
        "use strict";
        function AstWalkerFactory() {
            _classCallCheck(this, AstWalkerFactory), this.childrenWalkers = [], this.initChildrenWalkers();
        }
        return _createClass(AstWalkerFactory, [
            {
                key: "walk",
                value: function(ast, pre, post, options, state) {
                    return this.getWalker(pre, post, options, state).walk(ast, null);
                }
            },
            {
                key: "getWalker",
                value: function(pre, post, options, state) {
                    return this.getSlowWalker(pre, post, options, state);
                }
            },
            {
                key: "getSlowWalker",
                value: function(pre, post, options, state) {
                    return options || (options = new AstWalkOptions()), new AstWalker(this.childrenWalkers, pre, post, options, state);
                }
            },
            {
                key: "initChildrenWalkers",
                value: function() {
                    for(var e in this.childrenWalkers[NodeType.None] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Empty] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.EmptyExpr] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.True] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.False] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.This] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Super] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.QString] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Regex] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Null] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.ArrayLit] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.ObjectLit] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.Void] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.Comma] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Pos] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.Neg] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.Delete] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.Await] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.In] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Dot] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.From] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Is] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.InstOf] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Typeof] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.NumberLit] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Name] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.TypeRef] = ChildrenWalkers.walkTypeReferenceChildren, this.childrenWalkers[NodeType.Index] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Call] = ChildrenWalkers.walkCallExpressionChildren, this.childrenWalkers[NodeType.New] = ChildrenWalkers.walkCallExpressionChildren, this.childrenWalkers[NodeType.Asg] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgAdd] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgSub] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgDiv] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgMul] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgMod] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgAnd] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgXor] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgOr] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgLsh] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgRsh] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.AsgRs2] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.ConditionalExpression] = ChildrenWalkers.walkTrinaryExpressionChildren, this.childrenWalkers[NodeType.LogOr] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.LogAnd] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Or] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Xor] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.And] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Eq] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Ne] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Eqv] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.NEqv] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Lt] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Le] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Gt] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Ge] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Add] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Sub] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Mul] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Div] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Mod] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Lsh] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Rsh] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Rs2] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.Not] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.LogNot] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.IncPre] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.DecPre] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.IncPost] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.DecPost] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.TypeAssertion] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.FuncDecl] = ChildrenWalkers.walkFuncDeclChildren, this.childrenWalkers[NodeType.Member] = ChildrenWalkers.walkBinaryExpressionChildren, this.childrenWalkers[NodeType.VarDecl] = ChildrenWalkers.walkBoundDeclChildren, this.childrenWalkers[NodeType.ArgDecl] = ChildrenWalkers.walkBoundDeclChildren, this.childrenWalkers[NodeType.Return] = ChildrenWalkers.walkReturnStatementChildren, this.childrenWalkers[NodeType.Break] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Continue] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Throw] = ChildrenWalkers.walkUnaryExpressionChildren, this.childrenWalkers[NodeType.For] = ChildrenWalkers.walkForStatementChildren, this.childrenWalkers[NodeType.ForIn] = ChildrenWalkers.walkForInStatementChildren, this.childrenWalkers[NodeType.If] = ChildrenWalkers.walkIfStatementChildren, this.childrenWalkers[NodeType.While] = ChildrenWalkers.walkWhileStatementChildren, this.childrenWalkers[NodeType.DoWhile] = ChildrenWalkers.walkDoWhileStatementChildren, this.childrenWalkers[NodeType.Block] = ChildrenWalkers.walkBlockChildren, this.childrenWalkers[NodeType.Case] = ChildrenWalkers.walkCaseStatementChildren, this.childrenWalkers[NodeType.Switch] = ChildrenWalkers.walkSwitchStatementChildren, this.childrenWalkers[NodeType.Try] = ChildrenWalkers.walkTryChildren, this.childrenWalkers[NodeType.TryCatch] = ChildrenWalkers.walkTryCatchChildren, this.childrenWalkers[NodeType.TryFinally] = ChildrenWalkers.walkTryFinallyChildren, this.childrenWalkers[NodeType.Finally] = ChildrenWalkers.walkFinallyChildren, this.childrenWalkers[NodeType.Catch] = ChildrenWalkers.walkCatchChildren, this.childrenWalkers[NodeType.List] = ChildrenWalkers.walkListChildren, this.childrenWalkers[NodeType.Script] = ChildrenWalkers.walkScriptChildren, this.childrenWalkers[NodeType.ClassDeclaration] = ChildrenWalkers.walkClassDeclChildren, this.childrenWalkers[NodeType.InterfaceDeclaration] = ChildrenWalkers.walkTypeDeclChildren, this.childrenWalkers[NodeType.ModuleDeclaration] = ChildrenWalkers.walkModuleDeclChildren, this.childrenWalkers[NodeType.ImportDeclaration] = ChildrenWalkers.walkImportDeclChildren, this.childrenWalkers[NodeType.With] = ChildrenWalkers.walkWithStatementChildren, this.childrenWalkers[NodeType.Label] = ChildrenWalkers.walkLabelChildren, this.childrenWalkers[NodeType.LabeledStatement] = ChildrenWalkers.walkLabeledStatementChildren, this.childrenWalkers[NodeType.EBStart] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.GotoEB] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.EndCode] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Error] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Comment] = ChildrenWalkers.walkNone, this.childrenWalkers[NodeType.Debugger] = ChildrenWalkers.walkNone, NodeType._map)if (void 0 === this.childrenWalkers[e]) throw new Error("initWalkers function is not up to date with enum content!");
                }
            }
        ]), AstWalkerFactory;
    }();
    TypeScript.AstWalkerFactory = AstWalkerFactory, TypeScript.getAstWalkerFactory = getAstWalkerFactory, (function(ChildrenWalkers) {
        function walkRecordChildren(preAst, parent, walker) {
            preAst.name = walker.walk(preAst.name, preAst), walker.options.goNextSibling && preAst.members && (preAst.members = walker.walk(preAst.members, preAst));
        }
        function walkNamedTypeChildren(preAst, parent, walker) {
            walkRecordChildren(preAst, parent, walker);
        }
        ChildrenWalkers.walkNone = function(preAst, parent, walker) {
        }, ChildrenWalkers.walkListChildren = function(preAst, parent, walker) {
            var len = preAst.members.length;
            if (walker.options.reverseSiblings) for(var i = len - 1; i >= 0; i--)walker.options.goNextSibling && (preAst.members[i] = walker.walk(preAst.members[i], preAst));
            else for(var i = 0; i < len; i++)walker.options.goNextSibling && (preAst.members[i] = walker.walk(preAst.members[i], preAst));
        }, ChildrenWalkers.walkUnaryExpressionChildren = function(preAst, parent, walker) {
            preAst.castTerm && (preAst.castTerm = walker.walk(preAst.castTerm, preAst)), preAst.operand && (preAst.operand = walker.walk(preAst.operand, preAst));
        }, ChildrenWalkers.walkBinaryExpressionChildren = function(preAst, parent, walker) {
            walker.options.reverseSiblings ? (preAst.operand2 && (preAst.operand2 = walker.walk(preAst.operand2, preAst)), preAst.operand1 && walker.options.goNextSibling && (preAst.operand1 = walker.walk(preAst.operand1, preAst))) : (preAst.operand1 && (preAst.operand1 = walker.walk(preAst.operand1, preAst)), preAst.operand2 && walker.options.goNextSibling && (preAst.operand2 = walker.walk(preAst.operand2, preAst)));
        }, ChildrenWalkers.walkTypeReferenceChildren = function(preAst, parent, walker) {
            preAst.term && (preAst.term = walker.walk(preAst.term, preAst));
        }, ChildrenWalkers.walkCallExpressionChildren = function(preAst, parent, walker) {
            walker.options.reverseSiblings || (preAst.target = walker.walk(preAst.target, preAst)), preAst.arguments && walker.options.goNextSibling && (preAst.arguments = walker.walk(preAst.arguments, preAst)), walker.options.reverseSiblings && walker.options.goNextSibling && (preAst.target = walker.walk(preAst.target, preAst));
        }, ChildrenWalkers.walkTrinaryExpressionChildren = function(preAst, parent, walker) {
            preAst.operand1 && (preAst.operand1 = walker.walk(preAst.operand1, preAst)), preAst.operand2 && walker.options.goNextSibling && (preAst.operand2 = walker.walk(preAst.operand2, preAst)), preAst.operand3 && walker.options.goNextSibling && (preAst.operand3 = walker.walk(preAst.operand3, preAst));
        }, ChildrenWalkers.walkFuncDeclChildren = function(preAst, parent, walker) {
            preAst.name && (preAst.name = walker.walk(preAst.name, preAst)), preAst.arguments && preAst.arguments.members.length > 0 && walker.options.goNextSibling && (preAst.arguments = walker.walk(preAst.arguments, preAst)), preAst.returnTypeAnnotation && walker.options.goNextSibling && (preAst.returnTypeAnnotation = walker.walk(preAst.returnTypeAnnotation, preAst)), preAst.bod && preAst.bod.members.length > 0 && walker.options.goNextSibling && (preAst.bod = walker.walk(preAst.bod, preAst));
        }, ChildrenWalkers.walkBoundDeclChildren = function(preAst, parent, walker) {
            preAst.id && (preAst.id = walker.walk(preAst.id, preAst)), preAst.init && (preAst.init = walker.walk(preAst.init, preAst)), preAst.typeExpr && walker.options.goNextSibling && (preAst.typeExpr = walker.walk(preAst.typeExpr, preAst));
        }, ChildrenWalkers.walkReturnStatementChildren = function(preAst, parent, walker) {
            preAst.returnExpression && (preAst.returnExpression = walker.walk(preAst.returnExpression, preAst));
        }, ChildrenWalkers.walkForStatementChildren = function(preAst, parent, walker) {
            preAst.init && (preAst.init = walker.walk(preAst.init, preAst)), preAst.cond && walker.options.goNextSibling && (preAst.cond = walker.walk(preAst.cond, preAst)), preAst.incr && walker.options.goNextSibling && (preAst.incr = walker.walk(preAst.incr, preAst)), preAst.body && walker.options.goNextSibling && (preAst.body = walker.walk(preAst.body, preAst));
        }, ChildrenWalkers.walkForInStatementChildren = function(preAst, parent, walker) {
            preAst.lval = walker.walk(preAst.lval, preAst), walker.options.goNextSibling && (preAst.obj = walker.walk(preAst.obj, preAst)), preAst.body && walker.options.goNextSibling && (preAst.body = walker.walk(preAst.body, preAst));
        }, ChildrenWalkers.walkIfStatementChildren = function(preAst, parent, walker) {
            preAst.cond = walker.walk(preAst.cond, preAst), preAst.thenBod && walker.options.goNextSibling && (preAst.thenBod = walker.walk(preAst.thenBod, preAst)), preAst.elseBod && walker.options.goNextSibling && (preAst.elseBod = walker.walk(preAst.elseBod, preAst));
        }, ChildrenWalkers.walkWhileStatementChildren = function(preAst, parent, walker) {
            preAst.cond = walker.walk(preAst.cond, preAst), preAst.body && walker.options.goNextSibling && (preAst.body = walker.walk(preAst.body, preAst));
        }, ChildrenWalkers.walkDoWhileStatementChildren = function(preAst, parent, walker) {
            preAst.cond = walker.walk(preAst.cond, preAst), preAst.body && walker.options.goNextSibling && (preAst.body = walker.walk(preAst.body, preAst));
        }, ChildrenWalkers.walkBlockChildren = function(preAst, parent, walker) {
            preAst.statements && (preAst.statements = walker.walk(preAst.statements, preAst));
        }, ChildrenWalkers.walkCaseStatementChildren = function(preAst, parent, walker) {
            preAst.expr && (preAst.expr = walker.walk(preAst.expr, preAst)), preAst.body && walker.options.goNextSibling && (preAst.body = walker.walk(preAst.body, preAst));
        }, ChildrenWalkers.walkSwitchStatementChildren = function(preAst, parent, walker) {
            preAst.val && (preAst.val = walker.walk(preAst.val, preAst)), preAst.caseList && walker.options.goNextSibling && (preAst.caseList = walker.walk(preAst.caseList, preAst));
        }, ChildrenWalkers.walkTryChildren = function(preAst, parent, walker) {
            preAst.body && (preAst.body = walker.walk(preAst.body, preAst));
        }, ChildrenWalkers.walkTryCatchChildren = function(preAst, parent, walker) {
            preAst.tryNode && (preAst.tryNode = walker.walk(preAst.tryNode, preAst)), preAst.catchNode && walker.options.goNextSibling && (preAst.catchNode = walker.walk(preAst.catchNode, preAst));
        }, ChildrenWalkers.walkTryFinallyChildren = function(preAst, parent, walker) {
            preAst.tryNode && (preAst.tryNode = walker.walk(preAst.tryNode, preAst)), preAst.finallyNode && walker.options.goNextSibling && (preAst.finallyNode = walker.walk(preAst.finallyNode, preAst));
        }, ChildrenWalkers.walkFinallyChildren = function(preAst, parent, walker) {
            preAst.body && (preAst.body = walker.walk(preAst.body, preAst));
        }, ChildrenWalkers.walkCatchChildren = function(preAst, parent, walker) {
            preAst.param && (preAst.param = walker.walk(preAst.param, preAst)), preAst.body && walker.options.goNextSibling && (preAst.body = walker.walk(preAst.body, preAst));
        }, ChildrenWalkers.walkRecordChildren = walkRecordChildren, ChildrenWalkers.walkNamedTypeChildren = walkNamedTypeChildren, ChildrenWalkers.walkClassDeclChildren = function(preAst, parent, walker) {
            walkNamedTypeChildren(preAst, parent, walker), walker.options.goNextSibling && preAst.extendsList && (preAst.extendsList = walker.walk(preAst.extendsList, preAst)), walker.options.goNextSibling && preAst.implementsList && (preAst.implementsList = walker.walk(preAst.implementsList, preAst));
        }, ChildrenWalkers.walkScriptChildren = function(preAst, parent, walker) {
            preAst.bod && (preAst.bod = walker.walk(preAst.bod, preAst));
        }, ChildrenWalkers.walkTypeDeclChildren = function(preAst, parent, walker) {
            walkNamedTypeChildren(preAst, parent, walker), walker.options.goNextSibling && preAst.extendsList && (preAst.extendsList = walker.walk(preAst.extendsList, preAst)), walker.options.goNextSibling && preAst.implementsList && (preAst.implementsList = walker.walk(preAst.implementsList, preAst));
        }, ChildrenWalkers.walkModuleDeclChildren = function(preAst, parent, walker) {
            walkRecordChildren(preAst, parent, walker);
        }, ChildrenWalkers.walkImportDeclChildren = function(preAst, parent, walker) {
            preAst.id && (preAst.id = walker.walk(preAst.id, preAst)), preAst.alias && (preAst.alias = walker.walk(preAst.alias, preAst));
        }, ChildrenWalkers.walkWithStatementChildren = function(preAst, parent, walker) {
            preAst.expr && (preAst.expr = walker.walk(preAst.expr, preAst)), preAst.body && walker.options.goNextSibling && (preAst.body = walker.walk(preAst.body, preAst));
        }, ChildrenWalkers.walkLabelChildren = function(preAst, parent, walker) {
        }, ChildrenWalkers.walkLabeledStatementChildren = function(preAst, parent, walker) {
            preAst.labels = walker.walk(preAst.labels, preAst), walker.options.goNextSibling && (preAst.stmt = walker.walk(preAst.stmt, preAst));
        };
    })(ChildrenWalkers || (ChildrenWalkers = {
    }));
}(TypeScript || (TypeScript = {
}));