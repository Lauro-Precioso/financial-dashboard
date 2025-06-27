import { useState } from 'react';

export default function TransactionsForm({ onSubmit }) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('expense');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!description || !value || !category || !date) {
            alert('Please fill in all fields');
            return;

        }

        const newTransaction = {
            description,
            value: parseFloat(value),
            type,
            category,
            date,
            createdAt: new Date(createdAt).toISOString(),
        }

        onSubmit(newTransaction);

        // Reset form fields
        setDescription('');
        setValue('');
        setType('expense');
        setCategory('');
        setDate('');
        setCreatedAt(''); // May not be necessary
    }
}