import { useState } from "react";

const Social = () => {
    const [socialLinks, setSocialLinks] = useState([{ id: 1, platform: "", link: "" }]);

    const handleSocialLink = () => {
        // Add a new social link entry with a unique ID
        setSocialLinks([...socialLinks, { id: socialLinks.length + 1, platform: "", link: "" }]);
    };

    const handlePlatformChange = (index, value) => {
        const updatedLinks = [...socialLinks];
        updatedLinks[index].platform = value;
        setSocialLinks(updatedLinks);
    };

    const handleLinkChange = (index, value) => {
        const updatedLinks = [...socialLinks];
        updatedLinks[index].link = value;
        setSocialLinks(updatedLinks);
    };

    return (
        <div>
            {socialLinks.map((social, index) => (
                <div key={social.id} className="mb-4 text-sm font-semibold text-slate-500">
                    <p className="p-2"> Social Link {social.id}</p>
                    <div className="flex gap-2">
                        <select
                            className="border p-2"
                            value={social.platform}
                            onChange={(e) => handlePlatformChange(index, e.target.value)}
                        >
                            <option value="" disabled>Select platform...</option>
                            <option>LinkedIn</option>
                            <option>Twitter</option>
                            <option>Instagram</option>
                            <option>Facebook</option>
                            <option>YouTube</option>
                        </select>
                        <input
                            className="border p-2"
                            placeholder="Enter profile link"
                            value={social.link}
                            onChange={(e) => handleLinkChange(index, e.target.value)}
                        />
                    </div>
                </div>
            ))}

            <p
                className="cursor-pointer text-black bg-gray-200 text-center text-sm font-bold p-2 w-96"
                onClick={handleSocialLink}
            >
                + Add new Social Link
            </p>
        </div>
    );
};

export default Social;
