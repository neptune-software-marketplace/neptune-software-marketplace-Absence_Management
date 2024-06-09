var data  = wfData.objectKey;
await entities.absence_request.createQueryBuilder()
    .update()
    .set({"status":"Approved"})
    .where("Uniqe_id = :Uniqe_id", {Uniqe_id: data})
    .execute();

complete();