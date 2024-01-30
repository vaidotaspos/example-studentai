import {useFormik} from "formik";
import * as Yup from 'yup';

export default function RegisterPage() {
    const formik = useFormik({
       initialValues: {

       },
        validationSchema: Yup.object({

        }),
        onSubmit: (values) => {

        }
    });


    return (
        <div className="container mx-auto mt-5">
            <h1 className="text-3xl my-5">Vartotojo registracijos puslapis</h1>

            <form className='w-full mx-auto max-w-sm' onSubmit={formik.handleSubmit}>
                <div className='mb-8'>
                    <label
                        htmlFor='email'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        EL. paštas
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formik.values['email']}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                    {formik.touched['email'] && formik.errors['email'] && (
                        <p className='text-red-600'>{formik.errors['email']}</p>
                    )}
                </div>
                <div className="mb-8">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Slaptažodis
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values['password']}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                    {formik.touched['password'] && formik.errors['password'] && (
                        <p className='text-red-600'>{formik.errors['password']}</p>
                    )}
                </div>
                <div className="mb-8">
                    <label
                        htmlFor="password-confirm"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Slaptažodžio pakartojimas
                    </label>
                    <input
                        type="password"
                        id="password-confirm"
                        name="password_confirm"
                        value={formik.values['password_confirm']}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                    {formik.touched['password_confirm'] && formik.errors['password_confirm'] && (
                        <p className='text-red-600'>{formik.errors['password_confirm']}</p>
                    )}
                </div>
                <div className='flex items-center justify-center'>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Registruotis
                    </button>
                </div>
            </form>
        </div>
    )
        ;
}
