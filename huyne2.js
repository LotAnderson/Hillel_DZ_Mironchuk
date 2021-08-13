
        let arg = 10; 
        delete arg ;
        console.log(arg)
            function nuTipaEtoBind(func , obj , arg1= undefined , arg2 = undefined, arg3 = undefined ){

                //Useless block with checking arguments :(
                    // arguments.toArray.forEach(element => {console.log(element)
                        
                    // });
                    // [ arg1 , arg2 , arg3 ].forEach(element => console.log(element))
                    // if ( arg1 === undefined ){
                    //     let promegutok = arg2 ;
                    //     arg2 = arg3 ;
                    //     arg1 = promegutok; 
                    //     arg3 = undefined ;
                    // }
                    // else if ( arg2 === undefined ){
                    //     arg2 = arg3 ;
                    //     arg3 = undefined;
                    // }
                    // else if (arg1 === undefined || arg2 === undefined ){
                    //     arg
                    // }
                if ( obj === undefined || obj === null || obj === `` ){
                    window.newFunc = func ;
                    return newFunc( arg1 , arg2 , arg3 )
                }
                obj.newFunc = func ;
                return obj.newFunc( arg1 , arg2 , arg3 )
            }
        this.x = `in general scope`;
        let module = {
        x: 81,
        getX: function() { return this.x; }
        };

        module.getX(); // 81

        let objWithoutGetX = {
            x : 1 
        }
        let objWithoutGetX2 = {
            x : 2
        }
        let objWithoutGetX3 = {
            objInObjWithoutGetX : {
            x : `even if the obj is in the other obj`
        }
        }

        

        console.log(nuTipaEtoBind(module.getX , `` , 1 , 2 , undefined))
        // console.log(nuTipaEtoBind(module.getX, window))
        // console.log(nuTipaEtoBind(module.getX, objWithoutGetX))
        // console.log(nuTipaEtoBind(module.getX, objWithoutGetX2))
        // console.log(nuTipaEtoBind(module.getX, objWithoutGetX3.objInObjWithoutGetX))


        let weNeedAnotherFunc = {
            nuTipoY : `Теперь я вывожу другой текст`,
            nuTipoGetY : function() { return this.nuTipoY}
        }
        this.nuTipoY = `uNdEfInEd`
        let objWithoutGetY = {
            nuTipoY : 3
        }
        let objWithoutGetY2 = {
            nuTipoY : 4
        }
        let objWithoutGetY3 = {
            objInObjWithoutGetY : {
            nuTipoY : `even if the obj is in the other obj`
        }
        }

        // console.log(nuTipaEtoBind(weNeedAnotherFunc.nuTipoGetY))
        // console.log(nuTipaEtoBind(weNeedAnotherFunc.nuTipoGetY , weNeedAnotherFunc))
        // console.log(nuTipaEtoBind(weNeedAnotherFunc.nuTipoGetY , objWithoutGetY))
        // console.log(nuTipaEtoBind(weNeedAnotherFunc.nuTipoGetY , objWithoutGetY2))
        // console.log(nuTipaEtoBind(weNeedAnotherFunc.nuTipoGetY , objWithoutGetY3.objInObjWithoutGetY))



