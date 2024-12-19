import './index.css';

const Filter = ({ setFilterStatus }: any) => {
    return (
        <div className="mb-4">
            <select
                onChange={(e) => setFilterStatus(e?.target?.value)}
                className="border p-2"
            >
                <option value="all">All</option>
                <option value="applied">Applied</option>
                <option value="interviewing">Interviewing</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
            </select>
        </div>
    );
};

export default Filter;
