import { Entry } from "../Modals/entry.js";

export const addEntry = async (req, res) => {
  const {
    Stratergy,
    Script,
    Qty,
    Side,
    EntryPrice,
    ExitPrice,
    Status,
    Package,
  } = req.body;
  const pnl = (ExitPrice - EntryPrice) * Qty;

  const entry = await Entry.create({
    Stratergy,
    Script,
    Qty,
    Side,
    EntryPrice,
    ExitPrice,
    Status,
    Pnl: pnl, // Set the calculated PnL
    Package,
    admin: req.admin,
  });

  res.status(200).json({ message: "Entry uploaded..!", entry });
};

export const getEntry = async (req, res) => {
  const entries = await Entry.find();

  if (entries.length == 0) return res.json({ message: "There are no Entries" });

  res.json({ entries });
};

export const updateEntry = async (req, res) => {
  const id = req.params.id;

  const {
    Stratergy,
    Script,
    Qty,
    Side,
    EntryPrice,
    ExitPrice,
    Status,
    Pnl,
    Package,
  } = req.body;

  let entry = await Entry.findById(id);

  if (!entry) return res.json({ message: "Invalid Id" });

  (entry.Stratergy = Stratergy), (entry.Script = Script), (entry.Qty = Qty),(entry.Side=Side),(entry.EntryPrice=EntryPrice),(entry.EntryPrice=EntryPrice),(entry.ExitPrice=ExitPrice),(entry.Status=Status),(entry.Pnl),(entry.Package=Package);

  await entry.save();

  res.json({ message: "Entry has been updated..!", entry});
};

export const deleteById=async(req,res)=>{
    const entryID=req.params.id;
    let entry =await Entry.findById(entryID);
    if(!entry) return res.json({message:'Entry already deleted'});
    await Entry.deleteOne();
    res.json(
        {
            success:true,
            message:'Entry deleted Succesfully'
        }
    )
}

export const getEntryById = async (req, res) => {
  const entryID = req.params.id;

  let entry = await Entry.findById(entryID);

  if (!entry) return res.json({ message: "Entry not exist" });

  res.json({message:"Your Entry by id...",entry})
};
