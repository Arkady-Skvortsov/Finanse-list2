        let main_p = document.querySelector('#budjet-place');
        let m = document.querySelectorAll('.por');
        let btn = document.querySelector('#btn_1');
        let money_vl = document.querySelector('#budjet');
        let message = document.querySelector('.message-block');
        let block = document.querySelector('.budjet-block');
        let container = document.querySelector('.container-emoji');
        let znak = document.querySelector('#v');
        let infor = document.querySelector('#infor');
        let btn2 = document.querySelector('#btn_2');
        let btn3 = document.querySelector('#btn_3');
        let col = document.querySelector('#col_vo');
        let X = document.querySelector('.X');
        let Spisok_2 = document.querySelector('#srok');
        let x = document.querySelector('.x');
        let d_container = document.querySelector('.d-container');
        let hdn_inf = document.querySelector('#hide_information');
        let w_containers = document.querySelectorAll('.w-container');
        let m_containers = document.querySelectorAll('.m-container');
        let c = document.querySelector('.coshel');
        let preload_week = document.querySelectorAll('.preload_w');
        let r = document.querySelector('#Resp');
        let pegment = document.querySelector('#col');
        let pegment_2 = document.querySelector('#col2');
        let yes = document.querySelector('.yes');
        let information_1 = document.querySelector('.inf_1');
        let no = document.querySelector('.no');
        let information_2 = document.querySelector('.inf_2');
        let ekran = document.querySelector('.ekran_block');
        let d2 = document.querySelector('.week-block');
        let d3 = document.querySelector('.month-block');
        let sym_arr = [];
        let obj = {};
        
        btn.addEventListener('click', Add_Money);
        btn2.addEventListener('click', Show);
        btn3.addEventListener('click', Clear);
        X.addEventListener('click', x1);
        x.addEventListener('click', x2);
        pegment.addEventListener('click', function() {
           pegment.classList.add('act'); //animation
        });
        
        pegment.addEventListener('dblclick', function() {
           pegment.classList.remove('act'); //end of animation
        });

        pegment_2.addEventListener('click', function() {
           pegment_2.classList.add('hide_sh');  
        });

        pegment_2.addEventListener('dblclick', function() {
           pegment_2.classList.remove('hide_sh');
        });

        yes.addEventListener('mouseover', function() {
           information_1.classList.add('Hidden_show');
        });

        yes.addEventListener('mouseout', function() {
           information_1.classList.remove('Hidden_show');
        });

        no.addEventListener('mouseover', function() {
           information_2.classList.add('Hidden_show_2');
        });

        no.addEventListener('mouseout', function() {
           information_2.classList.remove('Hidden_show_2');
        });

        yes.addEventListener('click', Statistic);
        no.addEventListener('click', No);

        //yes and no - that is blocks of choice 
        
        m.forEach(function(j) {
           j.addEventListener('click', function(event) { 
              if(event.target.parentElement.classList.contains('por')) {
                 let moj = event.target.parentElement.children[0]; //Emoji of block 
                 obj.m_o_j = moj.cloneNode(true); //Бросаем копию эмодзи в объект
                 
                 //Делаем точно также, как и с копированием эмодзи
                 obj.a = col.value;
                 obj.inf = infor.value;
                 let a2 = Number(obj.a);
                 let tx = document.querySelector('.choice');
                 let s = document.querySelector('#srok');
                 let array = [];
                 array.push(a2);

                 if(col.value == "") Message('Введите сумму');

                 else if(col.value <= 0) Message('Вы не можете потратить меньше 0');

                 else if(infor.value == '') Message('Вы не указали вещь, на которую потратили');

                 else if(tx.textContent == 'Неделю') { 
                    
                    Display(d2, 'F');
                    Display(btn2, 'skrit');
                    Display(btn3, "J_hide");

                    if(money_vl.textContent <= 0 || a2 >= money_vl.textContent) {
                        Display(d2, 'hide');

                        ekran.classList.add('Hidden_show_3');
                        Display(btn2, 'skrit');
                        Display(btn3, "J_hide");
                    }   
                 }


                 else if(tx.textContent == 'Месяц') {
                    Display(d3, "T");
                    Display(btn3, "J_hide");
                    Display(btn2, "skrit");

                    if(money_vl.textContent <= 0 || a2 >= money_vl.textContent) {
                        Display(d3, 'hide2');

                        ekran.classList.add('Hidden_show_3');
                        Display(btn2, 'skrit');
                        Display(btn3, "J_hide");
                    }   
                 }  
                 //26 - 27
                 else if(tx.textContent == 'День') { 
                    Create_block('.d-container', '780px' , '575px',  '575px', '35px', '40px', '45px', '70px', '70px', '0px', '200px', '200px', '200px', '100px', '40px', '50px', '14px', '-100px', '10px', '125px', '135px', '-146px', '200px', '0px', '35px', '200px', '135px', '-50px', '285px', '40px', '395px', '475px', '750px');
                
                    if(money_vl.textContent <= 0 || a2 >= money_vl.textContent) {
                        ekran.classList.add('Hidden_show_3');
                        Display(btn2, 'skrit');
                        Display(btn3, "J_hide");
                    }   
                 }   

                 let Minus_money = array.reduce(function(l, n) {
                    l -= n;
                    return l;
                 }, money_vl.textContent);

                 money_vl.textContent = Minus_money;

                 col.value = "";
                 infor.value = "";

                 container.classList.remove('down');
                 container.classList.remove('down2');
              } 
           });
        });

        window.addEventListener('load', function() {
            c.classList.add('s');

            setTimeout(function() {
               c.classList.add('h3');
               c.classList.add('h2');
               c.classList.add('h1'); 
            }, 3500);
        }); 

        function Show() {
            container.classList.toggle('down');
            container.classList.toggle('down2');
        }
 
        function Add_Money() {
            if(main_p.value > 100000) Message('Вы ввели сумму больше 100000р');

            else if(main_p.value < 0) Message('Ваш балланс не может быть меньше 0');

            else if(main_p.value == "" || main_p.value == 0) Message('Ваш балланс не может быть равным 0');

            else if(money_vl.textContent >= 100000) Message('Ваш балланс достиг максимума');
             
            else {
               Add();
               main_p.value = "";
            }
        }

        function No() {
            ekran.classList.remove('Hidden_show_2');
            return location.reload();
        }

        function Add() {
            let d = document.querySelector('#v');
            let x1 = main_p.value;
            let x2 = Number(x1);
            let y = [];
            y.push(x2);

            let Y2 = Number(money_vl.textContent);

            let Symm_M = y.reduce(function(l, m) {
               l += m;
               return l;
            }, Y2);
            
            money_vl.textContent = Symm_M;

            hdn_inf.textContent = Symm_M;

            if(money_vl.textContent >= 10000) d.style.transform = 'translateX(30px)';

            if(money_vl.textContent >= 100000) d.style.transform = 'translateX(60px)';
        } 

        function Create_block(b, w, w2, w3, f1, f2, f4, h2, w4, marg1, marg2, marg3, w5, h3, h4, h5, t1, t2, t3, h6, l1, l2, l3, l5, l7, l8, marg4, clas1, clas2, clas3, clas4, clas5, w6) {
            let b_b = document.querySelector(b);
            let block = document.createElement('div');
            let emoji_b = document.createElement('div');
            let text_block = document.createElement('div');
            let money_block = document.createElement('div');
            let meme = document.querySelectorAll('.por');
            let cop = document.querySelectorAll('.cop');
            let minus = document.createElement('span');
            let check_block = document.createElement('div');
            let emoj = document.createElement('div');
            let container_main = document.createElement('div');
            let t = document.createElement('span');
            let rub = document.createElement('p');
            let text_money = document.createElement('span');
            let Delete = document.createElement('div');
            let edit = document.createElement('div');
            let pole1 = document.createElement('input');
            let pole2 = document.createElement('input');
            let d = document.createElement('i');
            let check = document.createElement('i');
            let ed = document.createElement('i');
            pole1.placeholder = 'Введите текст';
            pole1.type = 'text';
            pole2.placeholder = 'Введите сумму';
            pole2.type = 'number';
            let user = {}; //Объект для клонирования свойств из объекта obj!

            for(key in obj) {
                user[key] = obj[key];
            }   //Копируем объект с Эмодзи... Мдааа....Пхахаха... То чувство, когда спустя 4 месяца решил доделать старый проект....... Мдааа.... Калло-код с объектами...
            
            block.className = 'block';
            emoji_b.className = 'emoji_b';
            text_block.className = 'text_block';
            money_block.className = 'money_block';
            t.className = 't';
            text_money.className = 't_money';
            emoj.className = 'Emoj';
            check_block.className = 'Check';
            check.className = 'fas fa-check-circle icon3';
            minus.className = 'minus';
            Delete.className = 'delete';
            edit.className = 'Edit';
            d.className = 'fas fa-trash-alt icon1';
            ed.className = 'fas fa-edit icon2';
            pole1.className = 'pole1';
            pole2.className = 'pole2';
            rub.className = 'ruble';
            container_main.className = 'container-emoji_2';
            
            b_b.appendChild(block);
            block.appendChild(emoji_b);
            block.appendChild(text_block);
            block.appendChild(money_block);
            block.appendChild(check_block);
            block.appendChild(container_main);
            text_block.appendChild(t);
            money_block.appendChild(text_money);
            money_block.appendChild(minus);
            money_block.appendChild(rub);
            emoji_b.appendChild(emoj);
            block.appendChild(Delete);
            block.appendChild(edit);
            Delete.appendChild(d);
            check_block.appendChild(check);
            edit.appendChild(ed);
            text_block.appendChild(pole1);
            money_block.appendChild(pole2);
            
            meme.forEach(function(op) {
                let copy_op = op.cloneNode(true);
                copy_op.className = 'copy_emoj';

                container_main.appendChild(copy_op);

                copy_op.addEventListener('click', Emoji_click);
            });

            
            minus.textContent = '-';
            t.textContent = user.inf;
            text_money.textContent = user.a;
            rub.textContent = '₽';
            emoj.appendChild(user.m_o_j);
            
            text_block.style.width = w2;
            money_block.style.width = w3;
            t.style.fontSize = f1;
            text_money.style.fontSize = f2;
            minus.style.fontSize = f4;
            emoj.style.height = h2;
            emoj.style.width = w4;
            emoji_b.style.marginLeft = marg1;
            text_block.style.marginLeft = marg2;
            money_block.style.marginLeft = marg3;
            emoji_b.style.width = w5;
            emoji_b.style.height = h3;
            text_block.style.height = h4;
            money_block.style.height = h5;
            emoj.style.marginTop = t1;
            text_block.style.marginTop = t2;
            money_block.style.marginTop = t3;
            block.style.height = h6;
            t.style.paddingLeft = l1;
            minus.style.marginLeft = l2;
            text_money.style.paddingLeft = l3;
            emoji_b.style.marginTop = l5;
            text_money.style.marginTop = l7;
            money_block.style.marginLeft = l8;
            emoj.style.marginLeft = marg4;
            rub.style.marginTop = clas1;
            rub.style.transform = `translateX(${clas2})`;
            rub.style.fontSize = clas3;
            container_main.style.width = w6;

            let numb2 = Number(money_vl.textContent);

            Message(`Было потрачено ${user.a} ₽`);

            sym_arr.push(m);

            b_b.style.width = w;

            if(text_money >= 1000) rub.style.transform = `translateX(${clas4})`;

            else if(text_money >= 10000) rub.style.transform = `translateX(${clas5})`;

            $(b).css({height:'+=185px'});

            block.addEventListener('mouseover', Over); 

            function Over() {
                emoji_b.classList.add('hd1');
                money_block.classList.add('hd3'); 
                text_block.classList.add('hd2');

                block.classList.add('screen');
                   
                Delete.classList.add('sh');
                edit.classList.add('sh2');
            }

            block.addEventListener('mouseout', Out); 

            function Out() {
                emoji_b.classList.remove('hd1');
                money_block.classList.remove('hd3');
                text_block.classList.remove('hd2');

                block.classList.remove('screen');

                Delete.classList.remove('sh');
                edit.classList.remove('sh2');      
            }

            d.addEventListener('click', Delete_item); 

            function Delete_item(event) {
                if(event.target.parentElement.classList.contains('delete')) {
                    block.classList.add('sceep1');
                    block.classList.add('sceep2');
                    block.classList.add('sceep3');

                    let f = [];
                    let numberacia = Number(money_vl.textContent);
                    let numberacia_2 = Number(text_money.textContent);
                    f.push(numberacia_2);

                    let F = f.reduce(function(Relax, R) {
                       Relax += R;
                       return Relax;
                    }, numberacia);

                    money_vl.textContent = F;

                    $(b).css({height:'-=185px'});

                    Message(`Было возвращено ${numberacia_2} ₽`);
                }
            }

            edit.addEventListener('click', Edition);

            check_block.addEventListener('click', Correct);

            function Edition(event) {
                if(event.target.parentElement.classList.contains('Edit')) {
                    pole1.value = t.textContent;
                    pole2.value = text_money.textContent;
                    block.removeEventListener('mouseover', Over);
                    pole1.classList.add('show2');
                    pole2.classList.add('show3');
                    edit.classList.remove('sh2');
                    emoji_b.classList.add('hd3');
                    check_block.classList.add('sh3');
                    emoj.classList.add('hdn');
                    minus.classList.add('hidden_1');
                    container_main.classList.add('main_final');
                } 
            }

            function Correct(event) {
                if(event.target.parentElement.classList.contains('Check')) {
                    t.textContent = pole1.value;
                    text_money.textContent = pole2.value;
                    pole1.classList.remove('show2');
                    pole2.classList.remove('show3');
                    check_block.classList.remove('sh3');
                    emoji_b.classList.remove('hd3');
                    emoj.classList.remove('hdn');
                    block.addEventListener('mouseover', Over);
                    container_main.classList.add('Right_now');

                    setTimeout(() => {
                       container_main.classList.add('Now');
                    }, 500);
                    
                    minus.classList.remove('hidden_1');
                
                    let c = [];
                    let Pole_1 = Number(pole2.value);
                    c.push(Pole_1);

                    let Minus_money = c.reduce(function(M1, D1) {
                       M1 -= D1;
                       return M1;
                    }, Number(money_vl.textContent)); 

                    money_vl.textContent = Minus_money;

                    Message("Вы изменили отчет о покупке!");

                    if(money_vl.textContent <= 0) {
                       Message('Вы не можете потратить меньше 0');
                       money_vl.textContent = "0";
                    } 

                    else if(Number(pole2.value) === text_money.textContent) return;
                }
            }

            function Emoji_click(event) {
                if(event.target.parentElement.classList.contains('copy_emoj')) {
                    let cp_em = event.target.parentElement.children[0];
                    let copy_em = cp_em.cloneNode(true);

                    emoj.removeChild(user.m_o_j); // Удаляем старое emoji и добовляем новое
                    emoj.appendChild(copy_em);
                }
            }
        } 

        function Clear() {
            let clear_b = document.querySelectorAll('.block');
            let k = document.querySelector('.choice');

            clear_b.forEach(function(B) {
               B.classList.add('Hid_now'); 

               let pc = B.children[2].children[0].textContent;

               let Num_p = Number(pc);
               let array_c = [];
               let V = Number(money_vl.textContent);

               array_c.push(Num_p);

               let Resp = array_c.reduce(function(c, v) {
                  c += v;
                  return c;
               }, V);

               money_vl.textContent = Resp;

               Message("Ваша история была очищена");

               setTimeout(function() {
                   Message(`Было возвращено ${Num_p} ₽`); 
               }, 4000);
               
               if(k.textContent == "День") {
                   switch(clear_b.length) {
                      case 1:
                        $('.d-container').css({height: "-= 150px"});
                        break;
                      case 2: 
                        $('.d-container').css({height: "-= 300px"});
                        break;
                      case 3: 
                        $('.d-container').css({height: "-= 450px"});
                        break;
                      case 4: 
                        $('.d-container').css({height: "-= 600px"});
                        break;
                      case 5:
                        $('.d-container').css({height: "-= 750px"});
                        break;
                      case 6:
                        $('.d-container').css({height: "-= 900px"});
                        break;
                      case 7:
                        $('.d-container').css({height: "-= 1050px"});
                        break;
                      case 8:
                        $('.d-container').css({height: "-= 1200px"});
                        break;
                      case 9:
                        $('.d-container').css({height: "-= 1350px"});
                        break;
                      case 10:
                        $('.d-container').css({height: "-= 1500px"});
                        break;
                      case 11:
                        $('.d-container').css({height: "-= 1650px"});
                        break;
                      case 12:
                        $('.d-container').css({height: "-= 1800px"});
                        break;
                      case 13:
                        $('.d-container').css({height: "-= 1950px"});
                        break;
                      case 14:
                        $('.d-container').css({height: "-= 2100px"});
                        break;
                      case 15:
                        $('.d-container').css({height: "-= 2250px"});
                        break;
                      case 16:
                        $('.d-container').css({height: "-= 2400px"});
                        break;
                      case 17:
                        $('.d-container').css({height: "-= 2550px"});
                        break;
                      case 18:
                        $('.d-container').css({height: "-= 2700px"});
                        break;
                      case 19:
                        $('.d-container').css({height: "-= 2850px"});
                        break;
                      case 20:
                        $('.d-container').css({height: "-= 3000px"});
                        break;
                   }  
               }  
                                                                  
               /* else if(k.textContent == "Неделю") console.log(k.textContent); //$().css({height: `-= ${b}`});

               else if(k.textContent == "Месяц") console.log(k.textContent); //$().css({height: `-= ${b}`}); */
            }); 
        }

        function Display(d, cl) {
            d.classList.add(cl);
            btn2.classList.add('skrit');
        }

        function Statistic() {
            let ftr = document.querySelector('footer');
            let B = document.querySelectorAll('.block');
            let B_2 = document.querySelector('.block');
            let choice_now = document.querySelector('.choice');
            let period = document.querySelector('#Period');
            let Obcha_syma = document.querySelector('#Symmarno');
            let little_symm = document.querySelector('#col');
            let little_thing = document.querySelector('#min');
            let big_thing = document.querySelector('#max');
            let big_symm = document.querySelector('#col2');
            ekran.classList.remove('Hidden_show_3');

            ftr.classList.add('S_ow');

            period.textContent = choice_now.textContent;
            Obcha_syma.textContent = `${hdn_inf.textContent} ₽`;

            /*let min = Math.min(...B_money);

            console.log(min);*/

            B.forEach(function(n) {
                let min = Math.min(...sym_arr);
                let max = Math.max(...sym_arr);

               if(min && max) {
                    let pl = n.children[1].children[0].textContent; 

                    big_thing.textContent = pl;
                    big_symm.textContent = max;

                    little_symm.textContent = min;
                    little_thing.textContent = pl;
                }
            });
            
            btn2.removeEventListener('click', Show);
            btn.removeEventListener('click', Add);
            btn3.removeEventListener('click', Clear);
            btn.removeEventListener('click', Add_Money);
            //Самый дейтсвенный способ найти минимальное или максимальное число в массиве - это через троеточию ...arr
        }
 
        function x1() {
            let month_block = document.querySelector('.month-block');

            month_block.classList.add('hide2');
            btn_2.classList.remove('skrit');
        }

        function x2() {
            let week_block = document.querySelector('.week-block');

            week_block.classList.add('hide');
            btn_2.classList.remove('skrit');

            return;
        }

        function Change() {
            let Vibor = document.querySelector('#srok').options.selectedIndex;
            let s2 = document.querySelector('#srok').options[Vibor].text;
            //Все 2 строчки нужны, чтобы работать со списками <select></select>
            let srok = document.querySelector('#srok');
            let day = document.querySelector('.day-block');
            let week = document.querySelector('.w-block');
            let month = document.querySelector('.m-block');

            srok.classList.add('n');
            
            let p = document.createElement('p');
            p.className = 'choice';
            
            block.appendChild(p);

            p.textContent = s2;

            money_vl.classList.add('c1');
            znak.classList.add('c2');
            p.classList.add('c3');

            if(p.textContent == 'День') {
                Sekcia(day, 'load1');
                Sekcia(d_container, 'container1');
            } 

            else if(p.textContent == 'Неделю') {
                Sekcia(week, 'load2');

                w_containers.forEach(function(containers) {
                   Sekcia(containers, 'container2');
                }); 
            } 

            else if(p.textContent == 'Месяц') {
                Sekcia(month, 'load3');

                m_containers.forEach(function(contain) {
                   Sekcia(contain, 'container3');
                }); 
            } 
        }

        function Sekcia(b, cla) {
            b.classList.add(cla);
        }

        function Message(v) {
           let text = document.createElement('span');
           text.className = 'text';
           message.appendChild(text);

           text.textContent = v;

           message.classList.add('a1');
           message.classList.add('a2');
           message.classList.add('a3');

           setTimeout(function() {
              message.classList.remove('a3');
              message.classList.remove('a2');
              message.classList.remove('a1'); 
              text.textContent = '';
           }, 3000);
        }