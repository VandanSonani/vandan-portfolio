

const TechCard = ({ tech, svg }) => {

    return (
        <div className="flex gap-2  justify-center items-center duration-500	hover:bg-neutral-900 text-center rounded-md border-[0.1px] border-neutral-600 p-4 bg-opacity-25 bg-neutral-600">
            {svg}
            {tech}
        </div>
    );
}

export default TechCard;