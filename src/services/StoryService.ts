const ask = require(`readline-sync`)
import { Character } from "../models/Character"

export class Store {

public randomShop(character: Character): string {


    const random = Math.floor(Math.random() * 5) + 1

    switch (random) {       // aleatorizador da loja , falta colocar os itens e o preço do ouro
        case 1: 
        console.clear()
        console.log(`
            Olá estranho, sou Howward, seu lojeiro pessoal!
            desta vez te trago tais itens pra sua jornada
            1 -                 "valor" 
            2 -                    -
            3 -                    -
            4 -                    -
            5 -                    -
            qual item te interessa?`)

            console.log(`Beleza, Tenho tudo isso de ouro ${character.getGold()}`)
           const choose = Number(ask.question(': '))

           //               VALORES
            const value21 = 23 // preciso do valor dos itens
            const value22 = 23 // preciso do valor dos itens
            const value23 = 23// preciso do valor dos itens
            const value24 = 23 // preciso do valor dos itens
            const value25 = 23// preciso do valor dos itens

            //              LAÇOS DE VERIFICAÇAO
            if(choose === 1){
                if(character.getGold() >= value21){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose === 2){
                if(character.getGold() >= value22){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose === 3){
                if(character.getGold() >= value23){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if(choose === 4){
                if(character.getGold() >= value24){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose === 5){
                if(character.getGold() >= value25){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else{
                return "Eu näo tenho esse item agora estranho."
            }


        case 2:

            console.clear()
            console.log(`
            Olá estranho, sou Howward, seu lojeiro pessoal!
            desta vez te trago tais itens pra sua jornada
            1 -                 "valor" 
            2 -                    -
            3 -                    -
            4 -                    -
            5 -                    -
            qual iten te interessa?`)
            console.log(`Beleza, Tenho tudo isso de ouro ${character.getGold()}`)

            const choose2 = Number(ask.question(': '))

            //               VALORES
        const value16 = 23 // preciso do valor dos itens
        const value17 = 23 // preciso do valor dos itens
        const value18 = 23// preciso do valor dos itens
        const value19 = 23 // preciso do valor dos itens
        const value20 = 23// preciso do valor dos itens


        //              LAÇOS DE VERIFICAÇAO
            if(choose2 === 1){
                if(character.getGold() >= value16){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose2 === 2){
                if(character.getGold() >= value17){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose2 === 3){
                if(character.getGold() >= value18){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if(choose2 === 4){
                if(character.getGold() >= value19){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose2 === 5){
                if(character.getGold() >= value20){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else{
                return "Eu näo tenho esse item agora estranho."
            }


        case 3: 

        console.clear()
        console.log(`
            Olá estranho, sou Howward, seu lojeiro pessoal!
            desta vez te trago tais itens pra sua jornada
            1 -                 "valor" 
            2 -                    -
            3 -                    -
            4 -                    -
            5 -                    -
            qual iten te interessa?`)
            console.log(`Beleza, Tenho tudo isso de ouro ${character.getGold()}`)


         const choose3 = Number(ask.question(': '))

         //               VALORES
        const value11 = 23 // preciso do valor dos itens
        const value12 = 23 // preciso do valor dos itens
        const value13 = 23// preciso do valor dos itens
        const value14 = 23 // preciso do valor dos itens
        const value15 = 23// preciso do valor dos itens


        //              LAÇOS DE VERIFICAÇAO
            if(choose3 === 1){
                if(character.getGold() >= value11){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose3 === 2){
                if(character.getGold() >= value12){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose3 === 3){
                if(character.getGold() >= value13){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if(choose3 === 4){
                if(character.getGold() >= value14){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose3 === 5){
                if(character.getGold() >= value15){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else{
                return "Eu näo tenho esse item agora estranho."
            }


        case 4:
    
        console.clear()
        console.log(`
            Olá estranho, sou Howward, seu lojeiro pessoal!
            desta vez te trago tais itens pra sua jornada
            1 -                 "valor" 
            2 -                    -
            3 -                    -
            4 -                    -
            5 -                    -
            qual iten te interessa?`)
            console.log(`Beleza, Tenho tudo isso de ouro ${character.getGold()}`)


         const choose4 = Number(ask.question(': '))

         //               VALORES
        const value6 = 23 // preciso do valor dos itens
        const value7 = 23 // preciso do valor dos itens
        const value8 = 23// preciso do valor dos itens
        const value9 = 23 // preciso do valor dos itens
        const value10 = 23// preciso do valor dos itens


        //              LAÇOS DE VERIFICAÇAO
            if(choose4 === 1){
                if(character.getGold() >= value6){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose4 === 2){
                if(character.getGold() >= value7){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose4 === 3){
                if(character.getGold() >= value8){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if(choose4 === 4){
                if(character.getGold() >= value9){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose4 === 5){
                if(character.getGold() >= value10){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else{
                return "Eu näo tenho esse item agora estranho."
            }


        case 5:
            console.clear()
        console.log(`
            Olá estranho, sou Howward, seu lojeiro pessoal!
            desta vez te trago tais itens pra sua jornada
            1 -                 "valor" 
            2 -                    -
            3 -                    -
            4 -                    -
            5 -                    -
            qual iten te interessa?`)
            console.log(`Beleza, Tenho tudo isso de ouro ${character.getGold()}`)


         const choose5 = Number(ask.question(': '))

         //               VALORES
        const value1 = 23 // preciso do valor dos itens
        const value2 = 23 // preciso do valor dos itens
        const value3 = 23// preciso do valor dos itens
        const value4 = 23 // preciso do valor dos itens
        const value5 = 23// preciso do valor dos itens


        //              LAÇOS DE VERIFICAÇAO
            if(choose5 === 1){
                if(character.getGold() >= value1){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose5 === 2){
                if(character.getGold() >= value2){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose5 === 3){
                if(character.getGold() >= value3){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if(choose5 === 4){
                if(character.getGold() >= value4){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else if (choose5 === 5){
                if(character.getGold() >= value5){
                    return "item adcionado ao seu inventario"
                } else {
                    return "Você não tem ouro suficiente."
                }

            } else{
                return "Eu näo tenho esse item agora estranho."
            }

        default:
            return "Nenhuma loja encontrada";
    }
}
}