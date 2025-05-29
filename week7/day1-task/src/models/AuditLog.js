import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
  action: {
    type: String,
    enum: ['CREATE', 'UPDATE', 'DELETE'],
    required: true
  },
  entity: {
    type: String,
    required: true
  },
  entityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  performedBy: {
    type: String,
    default: 'system'
  },
  details: mongoose.Schema.Types.Mixed
}, { timestamps: true });

export const AuditLog = mongoose.model('AuditLog', auditLogSchema);
