import { useFormik } from 'formik';

export default function CreatePage() {
    const formik = useFormik({
      initialValues: {
          firstname: '',
          lastname: '',
          email: ''
      }
    });

    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-3xl my-5'>Pridėti studentą</h1>
            <p className='my-5'>
                Naujo studento sukūrimo puslapis
            </p>
            <form className='w-full mx-auto max-w-sm'>
                <div className='mb-12'>
                    <label
                        htmlFor='firstname'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        Vardas
                    </label>
                    <input
                        type='text'
                        id='firstname'
                        name='firstname'
                        value={formik.values['firstname']}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
            </form>
        </div>
    );
}
