export default function UploadZone() {
    return (
        <button>
            <label htmlFor="@import-json">Upload JSON</label>
            <input type="file" accept=".json" id="@import-json" onChange={() => {}}></input>
        </button>
    )
}
