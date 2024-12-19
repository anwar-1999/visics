import { useState } from 'react';
import './index.css';
import { useEffect } from 'react';

const ApplicationForm = (
    {
        addApplication,
        updateApplication,
        currentApplication
    }: any) => {

    const initialFormState = {
        id: null,
        jobTitle: '',
        companyName: '',
        dateApplied: '',
        status: 'applied',
    };

    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        if (currentApplication) {
            setFormData(currentApplication);
        } else {
            setFormData(initialFormState);
        }
    }, [currentApplication]);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (formData?.id) {
            updateApplication(formData);
        } else {
            addApplication({ ...formData, id: Date.now() });
        }
        setFormData(initialFormState);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData?.jobTitle}
                onChange={handleChange}
                className="border p-2 mr-2 mb-3"
            />
            <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData?.companyName}
                onChange={handleChange}
                className="border p-2 mr-2 mb-3"
            />
            <input
                type="date"
                name="dateApplied"
                value={formData?.dateApplied}
                onChange={handleChange}
                className="border p-2 mr-2 mb-3"
            />
            <select
                name="status"
                value={formData?.status}
                onChange={handleChange}
                className="border p-2 mr-2 mb-3"
            >
                <option value="applied">Applied</option>
                <option value="interviewing">Interviewing</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
            </select>
            <button type="submit"
                className="bg-blue-500 text-white p-2 w-1/2 md:w-auto"
            >
                {formData?.id ? 'Update' : 'Add'}
            </button>
        </form>
    );
};

export default ApplicationForm;
