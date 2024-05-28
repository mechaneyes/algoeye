import { useEffect } from "react";

const SaveVCard = () => {
  useEffect(() => {
    const generateVCard = () => {
      const vcard = `BEGIN:VCARD
                        VERSION:3.0
                        N:Weitzenberg;Ray;;;
                        FN:Ray Weitzenberg
                        TITLE:Benevolent Creator
                        ORG:Mechaneyes
                        TEL;TYPE=CELL:7186822628
                        EMAIL;TYPE=WORK:ray@nysee.nyc
                        URL:https://mechaneyes.com/
                        URL:https://bsky.app/profile/mechaneyes.bsky.social
                        URL:https://hypermute.com/@mechaneyes
                        URL:https://github.com/mechaneyes
                        URL:https://www.instagram.com/mechaneyes
                        NOTE:Fusing Art+Tech to Inspire Delight and Wonder
                    END:VCARD`;

      const blob = new Blob([vcard], { type: "text/vcard" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "ray_weitzenberg.vcf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    const downloadLink = document.getElementById("download-vcard");
    downloadLink.addEventListener("click", generateVCard);

    return () => {
      downloadLink.removeEventListener("click", generateVCard);
    };
  }, []);

  return (
    <div>
      <a id="download-vcard" href="#">
        <p>Save to</p>
        <p>Contacts</p>
      </a>
    </div>
  );
};

export default SaveVCard;
