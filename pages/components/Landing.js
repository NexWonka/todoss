import Form from "./Form";

export default function Landing() {
    return (
        <div className='flex flex-col gap-5 min-h-screen items-center justify-center text-center p-10'>
            <h1 className='text-6xl font-bold uppercase'>Welcome to ToDos</h1>
            <Form />
        </div>
    );
};