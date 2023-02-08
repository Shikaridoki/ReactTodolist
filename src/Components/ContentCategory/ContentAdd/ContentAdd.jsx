import React, {useContext, useState} from 'react';
import {CustomContext} from "../../../Utils/Context";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {v4 as uuidv4} from "uuid";
import axios from "axios";

const ContentAdd = ({statusContent}) => {

    const {status,user,changeUser} = useContext(CustomContext)

    const [show,setShow] = useState(false)

    const checkTasks = (data) =>{
        let has = user.categories.find((item)=> item.categoryName === statusContent).tasks.findIndex((item)=> item.taskTitle ===data.taskTitle)
        if (has > -1){
            toast('Такая задача уже есть')
        } else {
            addTask(data)
        }

    }

    const addTask = (data) =>{
        let newTask = {
            ...data,
            id: uuidv4(),
            isComplete: false

        }

        let newCategories = user.categories.map((item)=>{
            if (item.categoryName === statusContent){
                return{...item, tasks : [...item.tasks, newTask]}
            } {
                return item
            }
        })
        axios.patch(`http://localhost:8080/users/${user.id}`,{
            categories :newCategories})  .then((res) =>{
            changeUser(res.data,user.token)
            toast('Задача добавлена')
        })
            .catch((err)=> toast(`Задача не добавлена, ${err.message}`))


    }




    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm({
        mode:'onBlur'
    })



    return (
        <>
            {
                status !== 'all' &&  <>
                    {
                        show ?  <form noValidate className="content__add" onSubmit={handleSubmit(checkTasks)} >
                            <input {...register('taskTitle',{
                                required:{
                                    message:"Название задачи , обязателен к заполнению",
                                    value: true
                                },
                                minLength:{
                                    message:"Минимальнаядлина 3 символа",
                                    value:3

                                }

                            })
                                   } type="text" placeholder='текст задачи' className="content__add-field"/>
                            <span className='form__error'>{errors.taskTitle && errors.taskTitle.message}</span>
                            <div className="content__add-action">
                                <button className="content__add-btn">Добавить задачу</button>
                                <div className="content__add-close" onClick={()=>setShow(false)}>Отмена</div>
                            </div>
                        </form> : <div className='content__bottom' >
                <span className='content__bottom-icon' onClick={()=>setShow(true)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1V15" stroke="#B4B4B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 8H15" stroke="#B4B4B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </span>
                            <p className='content__bottom-text' onClick={()=>setShow(true)}>Новая задача</p>


                        </div>

                    }</>
            }

        </>
    );
};

export default ContentAdd;