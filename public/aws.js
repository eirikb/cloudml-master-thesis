var profile = function() {
    var self = this;
    this.Common = function(name, type) {
        this.meta = {
            name: name,
            type: type,
            required: []
        };

        this.toString = function() {
            return name + ' (' + type + ')';
        };
    };
    this.AWS = {
        EC2: {
            Instance: function() {
                self.Common.apply(this, arguments);
                this.AvailabilityZone = '';
                this.DisableApiTermination = '';
                this.ImageId = '';
                this.KernelId = '';
                this.KeyName = '';
                this.Monitoring = '';
                this.PlacementGroupName = '';
                this.PrivateIpAddress = '';
                this.RamDiskId = '';
                this.SecurityGroups = ['AWS::EC2::SecurityGroup'];
                this.SubnetId = '';
                this.Tags = ['AWS::EC2::Tags'];
                this.UserData = '';
                this.Volumes = ['AWS::EC2::MountPoin'];
                this.Description = '';
                this.meta.required.push('PlacementGroupName');
            },
            SecurityGroup: function() {
                self.Common.apply(this, arguments)
                this.SecurityGroupIngress = 'AWS::EC"::SecurityGroupRole?';
                this.GroupDescription = '';
                this.Description = '';
                this.meta.requied.push('GroupDescription');
            },
            EIP : function() {
                self.Common.apply(this, arguments);
                this.Description = '';
            }
        }
    };
    this.AWS.EC2.Instance.prototype = new this.Common();
    this.AWS.EC2.SecurityGroup.prototype = new this.Common();
    this.AWS.EC2.EIP.prototype = new this.Common();
    this.Fn = {
        FindInMap: function() {

        }
    };
};