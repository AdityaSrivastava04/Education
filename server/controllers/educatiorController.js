import {clerkClient} from "@clerk/express"

// Update Role to educator
export const updateRoletoEducate=async()=>{
    try {
        const userId=req.auth.userId
        await clerkClient.users.updateUserMetadata(userId,{
            publicMetadata:{
                role:'educator',
            }
        })
        res.json({success:true,message:'You can publish a course now'})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}