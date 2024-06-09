var data  = wfData.objectKey;
await entities.absence_request.createQueryBuilder()
    .update()
    .set({"status":"Rejected"})
    .where("Uniqe_id = :Uniqe_id", {Uniqe_id: data})
    .execute();

complete();