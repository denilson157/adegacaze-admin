import { Widget } from "@uploadcare/react-widget";
import { UploadCareEnum } from "../../util/APIEnums";

const UploadImage = ({ imageAtt }) => {
    return (
        <Widget
            onChange={imageAtt}
            publicKey={UploadCareEnum.Public}
            clearable
            imagesOnly={true}
        />
    )
}

export default UploadImage