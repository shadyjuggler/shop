export default function specialFormOptions() {
    return {
        size:
            [
                {
                    id: "size",
                    label: "Size (MB)",
                    placeholder: "Please, provide size in MB",
                    type: "text"
                }
            ],
        dimensions:
            [
                {
                    id: "height",
                    label: "Height (CM)",
                    placeholder: "Please, provide height in cm",
                    type: "text"
                },
                {
                    id: "width",
                    label: "Width (CM)",
                    placeholder: "Please, provide width in cm",
                    type: "text"
                },
                {
                    id: "lenght",
                    label: "Lenght (CM)",
                    placeholder: "Please, provide lenght in cm",
                    type: "text"
                }
            ],
        weight:
            [
                {
                    id: "weight",
                    label: "Weight (KG)",
                    placeholder: "Please, provide weigth in kg",
                    type: "text"
                }
            ]
    }
}