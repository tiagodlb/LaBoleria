export async function postClients(req,res){
    let { name, address, phone} = req.body;
    const cleanName = name.trim();
    const cleanAddress = address.trim();
    const cleanPhone = phone.trim();
    try {
    } catch (error) {
        return res.sendStatus(500);
    }
}